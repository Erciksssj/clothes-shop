import { Checkbox, Form, Radio, Slider, Space } from "antd";
import { useDispatch } from "react-redux";
import { onSetFilters } from "../../store/ui/uiSlice";

export const ProductFilter = () => {
  const dispatch = useDispatch()


  const handleFilter = (values: any) => {

    const filtersMap = values.categories.map( (category: string) => ({
      name: 'Category', value: category
    }))
    dispatch(onSetFilters(filtersMap))
  }

  return (
    <div className="product-filter">
      <Form onValuesChange={(values) => handleFilter(values) }>
        <div className="filter-section">
          <h3>Categories</h3>
          <Form.Item name="categories">
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="Perfume">Perfume</Checkbox>
                <Checkbox value="Trousers">Trousers</Checkbox>
                <Checkbox value="Shoe">Shoe</Checkbox>
                <Checkbox value="Handbag">Handbag</Checkbox>
                <Checkbox value="Hat">Hat</Checkbox>
                <Checkbox value="Thermos">Thermos</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>
        </div>

        <div className="filter-section">
          <h3>Color</h3>
          <div className="color-options">
            <Radio.Group defaultValue="blue">
              <Radio.Button value="blue" className="color-circle blue" />
              <Radio.Button value="yellow" className="color-circle yellow" />
              <Radio.Button value="green" className="color-circle green" />
              <Radio.Button
                value="blue-dark"
                className="color-circle blue-dark"
              />
            </Radio.Group>
          </div>
        </div>

        <div className="filter-section">
          <h3>Size</h3>
          <Radio.Group defaultValue="S" buttonStyle="solid">
            <Space className="size-options">
              <Radio.Button value="S" className="size-button">
                S
              </Radio.Button>
              <Radio.Button value="M" className="size-button">
                M
              </Radio.Button>
              <Radio.Button value="L" className="size-button">
                L
              </Radio.Button>
              <Radio.Button value="XL" className="size-button">
                XL
              </Radio.Button>
              <Radio.Button value="XXL" className="size-button">
                XXL
              </Radio.Button>
            </Space>
          </Radio.Group>
        </div>

        <div className="filter-section">
          <h3>Price</h3>
          <div className="price-slider">
            <Slider
              range
              min={0}
              max={1000}
              defaultValue={[100, 500]}
              tooltip={{
                formatter: (value) => `$${value}`,
                placement: "bottom",
              }}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};
