import React from "react";
import ProductDatabase from '../assets/Database';

export default function getUserData(userId) {
    const user = ProductDatabase.users.find((u) => u.id === userId);
    return user;
}