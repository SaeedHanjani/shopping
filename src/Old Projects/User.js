import React, { Component, Fragment } from "react";
import { FiUsers } from "react-icons/fi"
import { AiOutlineUserAdd } from "react-icons/ai"

export default class User extends React.Component {
    render() {
        return (
            <>
                <li><FiUsers />Mohsen</li>
                <li><AiOutlineUserAdd />Saeed</li>
            </>
        )
    }
}