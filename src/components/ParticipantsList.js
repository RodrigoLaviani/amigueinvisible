import Button from "./Button"
import '../assets/styles/participantsList.css'
import { DataGrid } from '@material-ui/data-grid';

const ParticipantsList = ({ className }) => {

    const columns = [
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        }
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
        { id: 4, lastName: 'Stark', firstName: 'Arya' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
        { id: 6, lastName: 'Melisandre', firstName: null },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey' },
    ];

    return (
        <div className={className}>
            <div className='listContainer'>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
            <Button classContainer='buttonContainer' classButton='classButton' title={'Enviar mails'} />
        </div>
    )
}

export default ParticipantsList;