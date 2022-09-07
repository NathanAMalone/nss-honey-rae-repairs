import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"
import { TicketEdit } from "../tickets/TicketEdit"
import { TicketForm } from "../tickets/TicketForm"
import { TicketList } from "../tickets/TicketList"


export const CustomerViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1 className="title--main">Honey Rae Repairs</h1>
					<div>Your one-stop shop for repairing your tech</div>

					<Outlet />
				</>
			}>
				<Route path="tickets" element={ <TicketList />  } />
				<Route path="ticket/create" element={ <TicketForm /> } />
				<Route path="profile" element={ <Profile />  } />
				<Route path="tickets/:ticketId/edit" element={ <TicketEdit /> } />

			</Route>
		</Routes>
	)
}