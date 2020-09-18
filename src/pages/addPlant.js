import react from 'React'
import addPlantForm from './forms/addPlantForm'


const addPlantPage = ({plants}) => (
    <div>
        <addPlantForm plants={plants} />
    </div>
)

export default addPlantPage