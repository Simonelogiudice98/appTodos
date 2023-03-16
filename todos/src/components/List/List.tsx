import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { IList } from './IListProps';
import CheckIcon from '../Icons/CheckIcon';
import CrossIcon from '../Icons/CrossIcon';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';


export default function List(props:IList):JSX.Element{
    
    const[currentPage,setCurrentPage] = useState(1);
    const elementPerPage:number = 5;

        const handleChange =  (event: React.ChangeEvent<unknown>, value: number) => {
            setCurrentPage(value);
            
        };

        useEffect(() => {
            setCurrentPage(1);
        },[props.todosFiltered]);
       
       return(
        
            <div className="divTable">
                <table>
                    <thead>
                        <tr>
                            <th>USER ID</th>
                            <th>TITLE</th>
                            <th>COMPLETED</th>
                        </tr>
                    </thead>
       
                    <tbody>
                        {
                                                
                           props.todosFiltered.slice(((currentPage -1) * elementPerPage), ((currentPage -1) * elementPerPage)+elementPerPage).map((todos) => {
                            return(
                            <tr className="todosRow" key={todos.id}>
                                <td className="tdUserId">{todos.userId}</td>
                                <td >{todos.title}</td>
                                <td className="tdIcon">
                                    {
                                        todos.completed ?
                                        <CheckIcon color="#00a0df" />
                                        :
                                        <CrossIcon color="#00a0df" />
                                    }
                            </td>
                                
                            </tr>
                            )})
                        }

                    </tbody>

                    <tfoot>
                        <tr>
                            <td>
                            <Stack spacing={2}>
                            <Typography></Typography>
                            { <Pagination count={Math.ceil((props.todosFiltered.length)/5)}  page={currentPage} onChange={handleChange}   /> }
                            </Stack>
                            </td>
                        </tr>                      
                    </tfoot>
                </table>
            </div>
        )
}
