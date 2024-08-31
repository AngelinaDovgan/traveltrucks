import { useDispatch } from "react-redux";
import * as Yup from "yup";

const CamperSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required"),
    email: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required"),
    bookingdate: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required"),
    comment: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required"),
});

export default function CamperForm() {
    const dispatch = useDispatch;
}
