require "test_helper"

class TypeItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @type_item = type_items(:one)
  end

  test "should get index" do
    get type_items_url
    assert_response :success
  end

  test "should get new" do
    get new_type_item_url
    assert_response :success
  end

  test "should create type_item" do
    assert_difference("TypeItem.count") do
      post type_items_url, params: { type_item: { description: @type_item.description, return_term: @type_item.return_term } }
    end

    assert_redirected_to type_item_url(TypeItem.last)
  end

  test "should show type_item" do
    get type_item_url(@type_item)
    assert_response :success
  end

  test "should get edit" do
    get edit_type_item_url(@type_item)
    assert_response :success
  end

  test "should update type_item" do
    patch type_item_url(@type_item), params: { type_item: { description: @type_item.description, return_term: @type_item.return_term } }
    assert_redirected_to type_item_url(@type_item)
  end

  test "should destroy type_item" do
    assert_difference("TypeItem.count", -1) do
      delete type_item_url(@type_item)
    end

    assert_redirected_to type_items_url
  end
end
