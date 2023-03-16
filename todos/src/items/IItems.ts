
export interface ITodo {    
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface IFilter { 
    userId: number;
    searchText: string;
    isCompleted: boolean;
}
