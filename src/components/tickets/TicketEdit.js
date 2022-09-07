import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const TicketEdit = () => {
    const {ticketId} = useParams()
    const [ticket, update] = useState({
        description: "",
        emergency: false
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    useEffect (() => {
        fetch(`http://localhost:8088/serviceTickets?id=${ticketId}`)
           .then(response => response.json())
           .then((data) => {
               const ticketObject = data[0]
               update(ticketObject)
           })
   }, [])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
    const ticketToSendToAPI = {
        userId: honeyUserObject.id,
        description: ticket.description,
        emergency: ticket.emergency,
        dateCompleted: ""
    }

        // TODO: Perform the fetch() to POST the object to the API
    return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ticketToSendToAPI)
    })
        .then(response => response.json())
        .then(() => {
            navigate("/tickets")
        })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">Edit Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        value={ticket.description}
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input 
                       type="checkbox"
                       value={ticket.emergency}
                       checked={ticket.emergency}   
                       onChange={ 
                            (evt) => {
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Ticket Changes
            </button>
        </form>
    )
}
