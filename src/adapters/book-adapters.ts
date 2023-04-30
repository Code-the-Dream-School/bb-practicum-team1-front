import { fetchAPIData } from "../util/fetch"

import { baseURL } from "../util/fetch";
// Create book adapter
type bookInput = {
    title: string,
    language: string,
    ageRange: string,
    publishingYear: number,
    status: string,
    description: string,
    genre: string,
    author: string,
    worldcatURL?: string,
    ISBN?: string,
    imageLink?: string,
}
/**
 * This function will create a book with the provided information.
 * @param {Object} bookInput - The input object containing information for the book creation.
 * @param {String} bookInput.title - Book's title.
 * @param {String} bookInput.language - Book's language.
 * @param {String} bookInput.ageRange - Book's age-range.
 * @param {Number} bookInput.publishingYear - Book's publishing year.
 * @param {String} bookInput.status - Book's status.
 * @param {Buffer} bookInput.image - Book's image(optional).
 * @param {String} bookInput.description - Book's description.
 * @param {String} bookInput.genre - Book's genre.
 * @param {String} bookInput.author - Book's author.
 * @param {String} bookInput.worldcatURL - URL for worldcat(optional).
 * @param {String} bookInput.ISBN - Book's ISBN(optional).
 * @param {String} bookInput.imageLink - Book's image link(optional).
 * @example
 * const bookInput = {
 *  title = "Pachinko",
 *  language = "English",
 *  ageRange = "Adults",
 *  publishingYear = 2017,
 *  status = "Open",
 *  description = "Pachinko is the second novel by Harlem-based author and journalist Min Jin Lee.
 *  Published in 2017, Pachinko is an epic historical fiction novel following a Korean family who immigrates to Japan.",
 *  genre = "Historical Fiction",
 *  author = "Min Jin Lee"
 *  imageLink = "https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0"
 * };
 * createBookAdapter(bookInput)
 * @returns {Promise<Object>} A promise that resolves book's creation information.
 */

export const createBookAdapter = async(bookInput:bookInput, file:File) =>{
    const url = `${baseURL}books`
    // convert body to form data type
    const formData = new FormData()
    // add the fields from book input object to form data object by converting bookInput obj to an array and iterate each key-value pair
    Object.entries(bookInput).forEach(([key, value]) =>{
        // convert value to string because publishingYear is number and the method expects the argument to be string or Blob
        if(value !== undefined) {
            formData.append(key, value.toString())
        }
    })
    
    // add the file to form data
    formData.append('image', file)
    
    // send form data to server 
     const data = await fetchAPIData(url, 'POST', formData, true, undefined, true)     
     return data
}

// Get all books for all users, all books owner, and by userId adapter
type queryBook = { 
    titles?: string,
    authors?: string, 
    genres?: string
    sort?: string, 
    fields?: string, 
    searchRadius?: number, 
    latitude?: number, 
    longitude?: number,
    page?: number,
    limit?: number,
    skip?: number,
}

type booksSchema ={
     _id: string,
    title: string,
    language: string,
    ageRange: string,
    publishingYear: number,
        owner: {
            _id: string,
            username: string,
            latitude: number,
            longitude: number,
        },
    status: string,
    description: string,
    genre: string,
    author: string,
    worldcatURL?: string,
    ISBN?: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
    imageURL?: string
}

/**
 * This function will get all books for users with the provided information
 * @param {String} queryBook - The query object containing information for query parameters.
 * @param {String} queryBook.titles - Book's titles as query parameters.
 * @param {String} queryBook.authors - Book's authors as query parameters.
 * @param {String} queryBook.genres - Book's genres as query parameters.
 * @param {String} queryBook.sort - Sort as query parameters.
 * @param {String} queryBook.fields - Fields as query parameters.
 * @param {Number} queryBook.searchRadius - Search radius as query parameter.
 * @param {Number} queryBook.latitude - Latitude as query parameter.
 * @param {Number} queryBook.longitude - Longitude as query parameter.
 * @param {Number} queryBook.page - Page as query parameter.
 * @param {Number} queryBook.limit - Limit as query parameter.
 * @param {Number} queryBook.skip - Skip as query parameter.
 * @example
 * const queryBook = {
 *  title = "Pachinko",
 *  author = "Min Jin Lee",
 *  sort = "CreatedAt",
 *  fields = "Genre",
 *  searchRadius = 25,
 *  latitude = 20,
 *  longitude = 40,
 *  page = 1,
 *  limit = 5,
 *  skip = 5
 * };
 * getAllBooksAdapter(queryBook) 
 * @returns {Promise<booksSchema[]>} A promise that resolves get all books(for users) information.
 */
// Get all books for users
export const getAllBooksAdapter = async(queryBook:queryBook | undefined):Promise<booksSchema[]> =>{
   let url = `${baseURL}books`
    if(queryBook){
        const queryParams = Object.entries(queryBook).map((bookFields)=>{
            const key = bookFields[0]
            const value = bookFields[1]
            return `${key}=${value}`
        }).join('&') 
       
        url = `${baseURL}books?${queryParams}`
    }
    const data = await fetchAPIData(url, 'GET', undefined)
    return data
}

/**
 * Get all books for owner based on the authentication route.
 * @example
 * getAllBooksOwnerAdapter() 
 * @returns {Promise<booksSchema[]>} A promise that resolves get all books (for owner) information.
 */
// Get all books for owner 
export const getAllBooksOwnerAdapter = async():Promise<booksSchema[]> => {
    const url = `${baseURL}books/user`
    const data = await fetchAPIData(url, 'GET', undefined)
    return data
}

/**
 * This function will get books by userId with the provided information
 * @param {String} userId - Id of the user.
 * @example
 * const userId = "6413f8ee3b117c5517f3f604"
 * getBooksUserIdAdapter(userId)
 * @returns {Promise<booksSchema[]>} A promise that resolves get books by userId information.
 */
// Get books by userId adapter
export const getBooksUserIdAdapter = async(userId:string): Promise<booksSchema[]> =>{
    const url = `${baseURL}books/user/${userId}`
    const data = await fetchAPIData(url, 'GET', undefined)
    return data
}

// Get single book, delete, and update adapter
/**
 * This function will get a single book with the provided information
 * @param {String} bookId - Id of the book.
 * @example
 * const bookId = "642269aef562cad511ed0a73" 
 * getSingleBookAdapter(bookId) 
 * @returns {Promise<Object>} A promise that resolves get single book information.
 */
// get single book adapter
export const getSingleBookAdapter = async(bookId:string): Promise<booksSchema> =>{
    const url = `${baseURL}books/${bookId}` 
    const data = await fetchAPIData(url, 'GET', undefined)
    return data
}

/**
 * This function will delete book with the provided information
 * @param {String} bookId - Id of the book.
 * @example
 * const bookId = "642269aef562cad511ed0a73" 
 * deleteBookAdapter(bookId)
 * @returns {Promise<Object>} A promise that resolves the delete book information.
 */
// delete book adapter
export const deleteBookAdapter = async(bookId:string)=>{
    const url = `${baseURL}books/${bookId}`
    const data = await fetchAPIData(url, 'DELETE', undefined)
    return data
}

// update book adapter
type bookParams = {
    id: string,
    title?: string,
    language?: string,
    ageRange?: string,
    publishingYear?: number,
    status?: string,
    description?: string,
    genre?: string,
    author?: string,
    worldcatURL?: string,
    ISBN?: string,
    imageLink?: string,
}

/**
 * This function will upadate the book with the provided information
 * @param {String} bookParams - The params object containing information for updating a book.
 * @param {String} bookParams.id - Book's id.
 * @param {String} bookParams.title - Book's title.
 * @param {String} bookParams.language - Book's language.
 * @param {String} bookParams.ageRange - Book's age range.
 * @param {Number} bookParams.publishingYear - Book's publishing year.
 * @param {String} bookParams.status - Book's status.
 * @param {String} bookParams.description - Book's description.
 * @param {String} bookParams.genre - Book's genre.
 * @param {String} bookParams.author - Book's author.
 * @param {String} bookInput.worldcatURL - URL for worldcat(optional).
 * @param {String} bookInput.ISBN - Book's ISBN(optional).
 * @param {String} bookInput.imageLink - Book's image link(optional).
 * @example
 * const bookParams = {
 *  id = "642269e6f562cad511ed0a75",
 *  title = "Pachinko",
 *  language = "English",
 *  ageRange = "Adults",
 *  publishingYear = 2017,
 *  status = "Open",
 *  description = "Pachinko is the second novel by Harlem-based author and journalist Min Jin Lee.
 *  Published in 2017, Pachinko is an epic historical fiction novel following a Korean family who immigrates to Japan.",
 *  genre = "Historical Fiction",
 *  author = "Min Jin Lee",
 *  worldcatURL = "https://www.worldcat.org/title/1015968617",
 *  ISBN = "9781455563920"
 *  imageLink = "https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0"
 * };
 * updateBookAdapter(bookParams)
 * @returns {Promise<Object>} - A promise that resolves updating book information.
 */
// update book adapter
export const updateBookAdapter = async(bookParams:bookParams, file:File): Promise<booksSchema> =>{
    const bookId = bookParams.id
    const url = `${baseURL}books/${bookId}`
    const formData = new FormData()
    Object.entries(bookParams).forEach(([key, value]) =>{
        if(value !== undefined){
         formData.append(key, value.toString())  
        }
    })
    
    // add the file to form data
    formData.append('image', file)
    
     // send form data to server 
     const data = await fetchAPIData(url, 'POST', formData, true, undefined, true)
     return data
}