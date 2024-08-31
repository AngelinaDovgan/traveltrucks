import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { addCamper } from "../../redux/camperSlice";
import toast, { Toaster } from "react-hot-toast";

const CamperSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required"),
    email: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required"),
    bookingdate: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required"),
    comment: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required"),
});

export default function CamperForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addCamper({
            name: values.name,
            email: values.email,
            bookingdate: values.bookingdate,
            comment: values.comment,
        }))
        toast.success("You successfully booked a camper!")
        actions.resetForm();
    }

    const nameId = useId();
    const emailId = useId();
    const bookingdateId = useId();
    const commentId = useId();

    const initialValues = {
        name: "",
        email: "",
        bookingdate: "",
        comment: "",
    };
    
    return (
        <Formik  initialValues={initialValues}
            validationSchema={CamperSchema}
            onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
                </div>

                <div>
                    <label htmlFor={emailId}>Email</label>
                    <Field type="text" name="email" id={emailId} />
                </div>

                <div>
                    <label htmlFor={bookingdateId}>Booking Date</label>
                    <Field type="text" name="bookingdate" id={bookingdateId} />
                </div>

                <div>
                    <label htmlFor={commentId}>Comment</label>
                    <Field type="text" name="comment" id={commentId} />
                </div>

                <button type="submit">Send</button>
                <Toaster/>
            </Form>
        </Formik>
    );
}
