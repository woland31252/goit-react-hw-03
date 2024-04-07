export default function Contact({ cont}) {
    return (
        <>
            <p>{cont.name}</p>
            <p>{cont.number}</p>
            <button type="button">Delete</button>
        </>
    )
}