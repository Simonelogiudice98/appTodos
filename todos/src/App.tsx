
import './App.scss';
import Header from './components/Header/Header';
import List from './components/List/List';
import Filters from './components/Filters/Filters';
import Footer from './components/Footer/Footer';
import React,{useState,useEffect} from 'react';
// import {IModel} from './items/IItems'
import * as _ from "lodash";
import { IFilter, ITodo } from './items/IItems';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const[todosFiltered, setTodosFiltered] = useState<ITodo[]>([]);
  const [filterModel, setFilterModel] = useState<IFilter>({
        userId: 0,
        searchText: '',
        isCompleted: false
  });
  
  const onClickSearch = (inputSearchText:string) => {
    const _filterModel = _.cloneDeep(filterModel);
    _filterModel.searchText = inputSearchText;
    setFilterModel(_filterModel);

  };

  const onChangeCompleted = (isComplete:boolean) => {
    const _filterModel = _.cloneDeep(filterModel);
    _filterModel.isCompleted = isComplete;
    setFilterModel(_filterModel);  
  };

  const onChangeUserId = (id:number) => {
    const _filterModel = _.cloneDeep(filterModel);
    _filterModel.userId = id;
    setFilterModel(_filterModel);        
  }; 

  const onClickResetFilter = () => {
    const _filterModel = _.cloneDeep(filterModel);
    _filterModel.searchText = "";
    _filterModel.isCompleted = false;
    _filterModel.userId = 0;
    setFilterModel(_filterModel);
  }

  useEffect(() => {
    if(filterModel && isLoaded && todos){
      let _todos = _.cloneDeep(todos);

      if(filterModel.isCompleted){
        _todos = _todos.filter( (todo:ITodo) =>{
          return todo.completed === filterModel.isCompleted;
        });
      };

      if(filterModel.userId && filterModel.userId > 0 ){
        _todos = _todos.filter((todo:ITodo) => {
          return todo.userId === filterModel.userId;
        });
      };

      if(filterModel.searchText && filterModel.searchText.length > 0){
        _todos = _todos.filter((todo:ITodo) => {
          return todo.title.indexOf(filterModel.searchText) > -1;
        });
      };

      setTodosFiltered(_todos);
    }
  },[filterModel, isLoaded, todos]);



  try{
    useEffect(() => {
      if(isLoaded === false){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((res) =>{
          setTodos(res);          
          setIsLoaded(true);
        })
      }
    },[isLoaded]);
    
  }catch{
    console.log("error");
  }

  
  return (
    <div className="App">
      <Header />

      <div className="main">
        {
        
          isLoaded && 
        <Filters
         filterModel={filterModel}
         allTodos={todos}
         onClickSearch={onClickSearch}
         onChangeCompleted={onChangeCompleted}
         onChangeUserId={onChangeUserId}
         onClickResetFilter={onClickResetFilter}
         />
        } 
      {
        isLoaded &&
          <List 
          
          allTodos={todos}
          todosFiltered={todosFiltered}
          />
      }
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
