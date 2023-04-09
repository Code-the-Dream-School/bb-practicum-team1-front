import { fetchAPIData } from "../util/fetch"

// Create book adapter
type bookInput = {
    title: string,
    language: string,
    ageRange: string,
    publishingYear: number,
    status: string,
    image?: Buffer,
    description: string,
    genre: string,
    author: string,
    worldcatURL?: string,
    ISBN?: string
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
 * };
 * createBookAdapter(bookInput)
 * @returns {Promise<Object>} A promise that resolves book's creation information.
 */
export const createBookAdapter = async(bookInput:bookInput) =>{
    const url = 'http://localhost:8000/api/v1/books'
    const data = await fetchAPIData(url, 'POST', bookInput )
    return data   
}

// Get all books for all users and all books owner adapter
type queryBook = { 
    title?:string,
    author?:string, 
    sort?:string, 
    fields?:string, 
    searchRadius?:number, 
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
 * @param {String} queryBook.title - Book's title as query parameter.
 * @param {String} queryBook.author - Book's author as query parameter.
 * @param {String} queryBook.sort - Sort as query parameter.
 * @param {String} queryBook.fields - Fields as query parameter.
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
 * @returns {Promise<bookSchema[]>} A promise that resolves get all books(for users) information.
 */
// Get all books for users
export const getAllBooksAdapter = async(queryBook:queryBook | undefined):Promise<booksSchema[]> => {
   let url = 'http://localhost:8000/api/v1/books'
    if(queryBook){
        const queryParams = Object.entries(queryBook).map((bookFields)=>{
            const key = bookFields[0]
            const value = bookFields[1]
            return `${key}=${value}`
        }).join('&') 
       
        url = `http://localhost:8000/api/v1/books?${queryParams}`
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
    const url = 'http://localhost:8000/api/v1/books/user'
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
export const getSingleBookAdapter = async(bookId:string): Promise<booksSchema>=>{
    const url = `http://localhost:8000/api/v1/books/${bookId}` 
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
    const url = `http://localhost:8000/api/v1/books/${bookId}`
    const data = await fetchAPIData(url, 'DELETE', undefined)
    return data
}

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
    imageURL?: string
      
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
 * @param {String} bookParams.imageURL - Book's image.
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
 *  imageURL = "/api/v1/books/image/642269e6f562cad511ed0a75"
 * };
 * updateBookAdapter(bookParams)
 * @returns {Promise<Object>} - A promise that resolves updating book information.
 */
// update book adapter
export const updateBookAdapter = async(bookParams:bookParams): Promise<booksSchema>=>{
    const bookId = bookParams.id
    const url = `http://localhost:8000/api/v1/books/${bookId}`
    const data = await fetchAPIData(url, 'POST', bookParams)
    return data
}