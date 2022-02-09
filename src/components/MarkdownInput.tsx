interface props {
  setNewValue(value: string | null): void;
}

export const MarkdownInput: React.FC<props> = ({ setNewValue }) => {
  return (
    <div className="col-6 p-0 text-center border-end border-dark" id="editor-input">
      <div className="border-bottom border-dark">Editor</div>
      <textarea
        onChange={(element) => {
          let text = element.target.value;
          setNewValue(text);
        }}
      />
    </div>
  );
};
