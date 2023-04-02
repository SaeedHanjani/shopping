import React, { Component } from 'react'
import Book from './Book'

export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [],
            title: '',
            author: '',
            year: '',
            id: '',
        }
    }
    titleHandler(event) {
        this.setState({
            title: event.target.value
        })
    }
    authorHandler(event) {
        this.setState({
            author: event.target.value
        })
    }
    yearHandler(event) {
        this.setState({
            year: event.target.value
        })
    }

    submitted = (event) => {
        event.preventDefault();
        let { title, author, year } = { ...this.state }
        if (title && author && year) {
            let newBook = {
                id: this.state.books.length + 1,
                title,
                author,
                year,
            }
            this.setState({
                books: [...this.state.books, newBook]
            })
            this.setState({ title: "", author: "", year: "" })
        }
    }
    render() {
        return (
            <>
                <form id="book-form" autocomplete="off" onSubmit={this.submitted}>
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="form-control"
                            onChange={(event) => this.titleHandler(event)}
                            value={this.state.title}
                        />
                    </div>

                    <div className="form-group">
                        <label for="author">Author</label>
                        <input
                            type="text"
                            id="author"
                            className="form-control"
                            onChange={(event) => this.authorHandler(event)}
                            value={this.state.author}
                        />
                    </div>

                    <div className="form-group">
                        <label for="year">Year</label>
                        <input
                            type="text"
                            id="year"
                            className="form-control"
                            onChange={(event) => this.yearHandler(event)}
                            value={this.state.year}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Add Book"
                        className="btn btn-warning btn-block add-btn"
                    />
                </form>
                <table class="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    {<tbody id="book-list">
                        {this.state.books.map(book => (
                            <Book {...book} key={book.id} />
                        ))}
                    </tbody>}
                </table>
            </>
        )
    }
}