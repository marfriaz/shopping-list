
$(function addListItem() {
    $('#js-shopping-list-form').submit(event => {
      //stop the default submission behavior for forms
      event.preventDefault();
      // newItemName = input
      let newItemName = $('#shopping-list-entry').val();
      // newItemName === true
      if (newItemName) {
        // newListItem formatted similar to existing Items (Item Name, check and delete)
        let newListItem = `
        <li>
          <span class="shopping-item">${newItemName}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
        `;
        // add newListItem to bottom of list
        $('.shopping-list').append(newListItem);
      }
    });
  }
)

$(function deleteListItem() {
    // syntax: $(selector).on(event,childSelector,data,function,
    // childSelector: specifies that the event handler should only be attached to the specified child elements
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        // /closest: returns the first ancestor of the selected element
        $(this).closest('li').remove();
         });
      });

$(function checkListItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        // /closest: returns the first ancestor of the selected element
        // .toggleClass: add class to element
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
         });
      });
      

  $(deleteListItem);
  $(addListItem);
  $(checkListItem);