import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Switch } from '@mui/material';
import React, {useState} from 'react';
import SearchIcon from '../Icons/LensIcon';
import { IFilters } from './IFiltersProps';

export default function Filters(props:IFilters):JSX.Element{


    const[textSearchInput, setSearchTextInput] = useState("");
    const uniqueUserIds = new Set(props.allTodos? props.allTodos.map(t => t.userId) : []);

    const handleChange = (event:any) => {
        setSearchTextInput(event.target.value);
    }

    return(

        <div className="divFilters">

            <div className='filtersLayout'>
                <h3 className="blueTitles">FILTERS</h3>

                <div className="researchFilter">
                    <button onClick={() =>{props.onClickSearch(textSearchInput)}} ><SearchIcon color={'#FFFF'} /></button>
                    <input onChange={handleChange} type="text" placeholder="search..."/>
                </div>

                <div className="divCompleted">
                    <h4 className="blueTitles">COMPLETED</h4>
                    <div>
                        {
                            props.filterModel.isCompleted ?
                            <span>YES</span>
                            :
                            <span>NO</span>
                        }                        
                        <Switch onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChangeCompleted(event.target.checked)} />
                    </div>
                </div>

                <div className='divSelect'>
                    <h4 className="blueTitles">SELECT USER ID </ h4> 
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  onChange={(event:SelectChangeEvent<string>) => props.onChangeUserId(parseInt(event.target.value)) }       
                                  placeholder="Selziona lo user"                      
                                >
                                    <MenuItem>Select id </MenuItem>
                                    {                                       
                                        props.allTodos &&
                                        uniqueUserIds &&
                                            Array.from(uniqueUserIds).map((userId,key) =>{
                                                return(                                                    
                                                    <MenuItem key={key} value={userId}>{userId}</MenuItem>
                                                )
                                            })
                                    }
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <span onClick={() => {props.onClickResetFilter()}} className="resetFilters"> Reset Filters</span>
            </div>
        </div>

    );
}

