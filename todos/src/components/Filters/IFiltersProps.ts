import { IFilter, ITodo } from "../../items/IItems";

export interface IFilters {

    onClickResetFilter():any;
    onClickSearch:(inputSearchText:string) => any;
    onChangeUserId:(id:number) => void;
    onChangeCompleted:(isCompleted:boolean) => void;
    filterModel:IFilter;
    allTodos:ITodo[];
}