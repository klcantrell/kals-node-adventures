import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import SingleItem, { SINGLE_ITEM_QUERY } from '../components/SingleItem';
import { fakeItem } from '../lib/testUtils';
import { wrap } from 'module';

describe('<SingleItem', () => {
  it('renders with proper data', async () => {
    const mocks = [
      {
        //when someone makes a request with this query and variable combo
        request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' } },
        //return this fake data
        result: {
          data: {
            item: fakeItem(),
          },
        },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleItem id="123" />
      </MockedProvider>
    );
    expect(wrapper.text()).toContain('Loading...');
    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find('h2'))).toMatchSnapshot();
    expect(toJSON(wrapper.find('img'))).toMatchSnapshot();
    expect(toJSON(wrapper.find('p'))).toMatchSnapshot();
  });

  it('Errors with a not found item', async () => {
    const mocks = [
      {
        //when someone makes a request with this query and variable combo
        request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' } },
        //return this fake data
        result: {
          errors: [{ message: 'Item not found' }],
        },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleItem id="123" />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    const item = wrapper.find('[data-test="graphql-error"]');
    expect(item.text()).toContain('Item not found');
    expect(toJSON(item)).toMatchSnapshot();
  });
});
