import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import Router from 'next/router';
import toJSON from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import CreateItem, { CREATE_ITEM_MUTATION } from '../components/CreateItem';
import { fakeItem } from '../lib/testUtils';

global.fetch = jest.fn().mockResolvedValue({
  json: () => ({
    secure_url: dogImage,
    eager: [{ secure_url: dogImage }],
  }),
});

global.alert = console.log;

const dogImage = 'https://dog.com/dog.jpg';

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
            image: 'https://dog.com/dog.jpg',
            largeImage: 'https://dog.com/dog.jpg',
            price: item.price,
            uploadError: false,
          },
        },
        result: {
          data: {
            createItem: {
              ...fakeItem(),
              __typename: 'Item',
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
    wrapper
      .find('#file')
      .simulate('change', { target: { files: ['dog.jpg'], name: 'file' } });
    await wait();
    Router.router = {
      push: jest.fn(),
    };
    wrapper.find('form').simulate('submit');
    await wait(50);
    expect(Router.router.push).toHaveBeenCalled();
  });
});
