import React from 'react';
import axios from "axios";
import User from '../types/User';

const LEADERBOARD_API_URL = "https://api.uwstout.wtf/";
const PAGE_LENGTH = 100;

export default function useTop(page: number = 0) {
    const [users, setUsers] = React.useState<User[]>([]);
    const [userPages, setUserPages] = React.useState<User[][]>([]);

    React.useEffect(() => {
        axios.get(LEADERBOARD_API_URL + "users/top", {
            params: {
                limit: PAGE_LENGTH,
                offset: PAGE_LENGTH * page
            }
        }).then((response) => {
            const users = response.data as User[];
            setUserPages((userPages) => {
                const newUserPages = [...userPages];
                newUserPages[page] = users;
                return newUserPages;
            });
        }).catch((error) => {
            console.log(error);
        });
    }, [page]);

    React.useEffect(() => {
        setUsers(userPages.flat());
    }, [userPages]);

    return users;
}

let currentSearchQuery = "";

export function useSearch(search: string) {
    const [users, setUsers] = React.useState<User[]>([]);

    React.useEffect(() => {
        currentSearchQuery = search;
        axios.get(LEADERBOARD_API_URL + "users/search", {
            params: {
                query: search
            }
        }).then((response) => {
            if (currentSearchQuery === search) {
                const users = response.data as User[];
                setUsers(users);
            }
        }).catch((error) => {
            console.log(error);
        });
    }, [search]);

    return users;
}