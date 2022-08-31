import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeList } from "../employees/EmployeeList"
import { TicketContainer } from "../tickets/TicketContainer"


export const EmployeeViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1 className="title--main">Honey Rae Repairs</h1>
					<div>Your one-stop shop for repairing your tech</div>

					<Outlet />
				</>
			}>
				<Route path="tickets" element={ <TicketContainer />  } />
                <Route path="employees" element={ <EmployeeList />  } />
				<Route path="custmoers" element={ <CustomerList />  } />

			</Route>
		</Routes>
	)
}