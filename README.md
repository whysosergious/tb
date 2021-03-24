# Task Board

Add, edit and move tasks.

# Global Controller

Task data is stored in a shared object together with custom hooks for finer control over component rerenders through `.dispatch()`. This is also build in mind for future handling of JSON data through `.decode()` and `.stringify()`.

# Drag-&-Drop

Event listeners are added and removed repsectively through initial events corresponding to React standards. They are used for identification of drop targets and an inline `transform` CSS property is applied to the hero card for a fluent drag effect.

# How to's

  - Add new task by clicking the corresponding column '+' button.
  - Add a title and/or description. Empty fields will be stored as 'Untitled' and 'No description' respectively.
  - Add and image by clicking the drop field or drag the file into it.
  - Save button adds the new task to the chosen column.
  - Drag tasks inside or between columns to rearrange them.
  - Drop task over the column title to place it to the top of the column or over the bottom column padding to place it at the very bottom.
  - Click the task or drag it less than 20px offset from it's original position to view and/or edit it.

# Todo's

  - Delete tasks.
  - Store and load column data.
  - Make it pretty.
  - Custom and/or random colors for cards and columns.
  - UX is important. Add feedback animations and transitions..
  - More Todo's.

# Bugz

Current.
  - Not known.

Fixed.
  - Image preview didn't display on click of file input.
  - Broken preview image was displayed when none was selected.
  - Image was removed from task when the task was edited.