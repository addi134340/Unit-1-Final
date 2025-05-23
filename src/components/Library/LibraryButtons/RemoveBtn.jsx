const RemoveButton = ({bookId, onRemove}) => {
    return (
        <button onClick={() => onRemove(bookId)}
        aria-label="Remove Book">
            Remove
        </button>
    );
};

export default RemoveButton;