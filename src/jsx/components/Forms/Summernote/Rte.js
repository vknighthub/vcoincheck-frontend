import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class Rte extends React.Component {

  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  render() {
    return (
      <Editor
        initialValue={this.props.contents ? this.props.contents : "<p>This is the initial content of the editor</p>"}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image code charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | code |link | image | bold italic backcolor | alignleft aligncenter alignright alignjustify |  \n" +
            "bullist numlist outdent indent | removeformat | help ",
          content_style: 'body { color: #7e7e7e }'
        }}
        onEditorChange={this.handleEditorChange}
        disabled={this.props.disabled}
      />
    );
  }
}

export default Rte;
