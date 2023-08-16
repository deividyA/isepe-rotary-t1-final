class TypeItemsController < ApplicationController
  before_action :set_type_item, only: %i[ show edit update destroy ]

  # GET /type_items or /type_items.json
  def index
    @type_items = TypeItem.all
  end

  # GET /type_items/1 or /type_items/1.json
  def show
  end

  # GET /type_items/new
  def new
    @type_item = TypeItem.new
  end

  # GET /type_items/1/edit
  def edit
  end

  # POST /type_items or /type_items.json
  def create
    @type_item = TypeItem.new(type_item_params)

    respond_to do |format|
      if @type_item.save
        format.html { redirect_to type_item_url(@type_item), notice: "Type item was successfully created." }
        format.json { render :show, status: :created, location: @type_item }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @type_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /type_items/1 or /type_items/1.json
  def update
    respond_to do |format|
      if @type_item.update(type_item_params)
        format.html { redirect_to type_item_url(@type_item), notice: "Type item was successfully updated." }
        format.json { render :show, status: :ok, location: @type_item }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @type_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /type_items/1 or /type_items/1.json
  def destroy
    @type_item.destroy

    respond_to do |format|
      format.html { redirect_to type_items_url, notice: "Type item was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_type_item
      @type_item = TypeItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def type_item_params
      params.require(:type_item).permit(:description, :return_term)
    end
end
