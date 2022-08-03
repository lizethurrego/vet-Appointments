import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Patients List</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                    Manage your {''}
                        <span className="text-indigo-600 font-bold ">Patients and Appointments</span>
                    </p>

                    { pacientes.map( paciente => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">There is not patients</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Start adding patients {''}
                        <span className="text-indigo-600 font-bold ">and they will appear here</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
