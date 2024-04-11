import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p>
          <IoPerson /> {name}
        </p>

        <p>
          <BsFillTelephoneFill /> {number}
        </p>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
