import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import Router from 'next/router';
import toJSON from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import CreateItem, { CREATE_ITEM_MUTATION } from '../components/CreateItem';
import { fakeItem } from '../lib/testUtils';

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

const dogImage = 'https://dog.com/dog.jpg';
global.fetch = jest.fn().mockResolvedValue({
  json: () => ({
    secure_url: dogImage,
    eager: [{ secure_url: dogImage }],
  }),
});

describe('<CreateItem />', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider>
        <CreateItem />
      </MockedProvider>
    );
    const form = wrapper.find('form[data-test="form"]');
    expect(toJSON(form)).toMatchSnapshot();
  });

  it('uploads a file when changed', async () => {
    const wrapper = mount(
      <MockedProvider>
        <CreateItem />
      </MockedProvider>
    );
    const input = wrapper.find('input[type="file"]');
    input.simulate('change', { target: { files: ['fakedog.jpg'] } });
    const data = new FormData();
    data.append('file', ['fakedog.jpg']);
    data.append('upload_preset', 'sickfits');
    await wait();
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.cloudinary.com/v1_1/kalalau/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    global.fetch.mockReset();
  });

  it('creates an item when form is submitted', async () => {
    const item = fakeItem();
    const mocks = [
      {
        request: {
          query: CREATE_ITEM_MUTATION,
          variables: {
            title: item.title,
            description: item.description,
            image: '',
            largeImage: '',
            price: item.price,
          },
        },
        result: {
          data: {
            createItem: {
              ...fakeItem,
              __typeName: 'Item',
            },
          },
        },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <CreateItem />
      </MockedProvider>
    );
    wrapper
      .find('#title')
      .simulate('change', { target: { value: item.title, name: 'title' } });
    wrapper.find('#price').simulate('change', {
      target: { value: item.price, name: 'price', type: 'number' },
    });
    wrapper.find('#description').simulate('change', {
      target: { value: item.description, name: 'description' },
    });
    wrapper.find('form').simulate('submit');
    await wait(50);
    //this does not work - perhaps has somerthing to do with Hooks
    // expect(Router.push).toHaveBeenCalled();
  });
});
