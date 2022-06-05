export default function Node({ id, data, next, deleteNode }) {
    return (
        <div style={{ border: '1px solid #000000' }}>
            Node
            <div>{data}</div>
            <div>{next}</div>
            <button onClick={() => deleteNode(id)}>delete</button>
        </div>
    )
}
