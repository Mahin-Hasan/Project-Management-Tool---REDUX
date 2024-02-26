import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }

    const onSubmit = (data) => {
        // console.log(data);
        dispatch(addTask(data));
        onCancel();
    }
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title='test title'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label className="mb-2" htmlFor="title">Title</label>
                    <input
                        className="w-full rounded-md"
                        type="text"
                        id="title"
                        {...register('title')} />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2" htmlFor="title">Description</label>
                    <textarea
                        className="w-full rounded-md"
                        type="text"
                        id="description"
                        {...register('description')} />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2" htmlFor="title">Deadline</label>
                    <input
                        className="w-full rounded-md"
                        type="date"
                        id="date"
                        {...register('date')} />
                </div>

                <div className="flex flex-col mb-5">
                    <label className="mb-2" htmlFor="title">Assign to</label>
                    <select
                        className="w-full rounded-md"
                        id="assignedTo"
                        {...register('assignedTo')}
                    >
                        <option value="Mahin Hasan">Mahin Hasan</option>
                        <option value="Ken Jones">Ken Jones</option>
                        <option value="Heisenberg">Heisenberg</option>
                        <option value="Jessie Pinkman">Jessie Pinkman</option>
                        <option value="Tom Cruize">Tom Cruize</option>
                        <option value="Tony Stark">Tony Stark</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2" htmlFor="title">Priority</label>
                    <select
                        className="w-full rounded-md"
                        id="priority"
                        {...register('priority')}
                    >
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div className="flex gap-3 justify-end">
                    <button onClick={() => onCancel()} className="btn btn-danger" type="button">Cancel</button>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>

        </Modal>
    );
};

export default AddTaskModal;