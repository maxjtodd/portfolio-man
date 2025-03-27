import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    constructor() { }

    async getUserById(userId: number): Promise<User | null> {
        const res = await fetch(`http://localhost:8080/api/user/${userId}`);

        const content = await res.json();

        if (res.status >= 400) {
            return null;
        }

        return content;
    }
}
