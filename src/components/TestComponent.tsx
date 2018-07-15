
import * as React from 'react'
import { connect } from 'react-redux';
import { ProcessFetchData, ProcessFetchDataFake } from '../actions';

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        label: state.label
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(ProcessFetchData(url))
    };
};

export interface ITestComponentProps {
    label?: string;
    items?: any;
    hasErrored?: boolean;
    isLoading?: boolean;

    fetchData?: (url: string) => void;
}

class TestComponent extends React.Component<ITestComponentProps, any>{
    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        const { label, hasErrored, isLoading, items } = this.props;

        if (hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (isLoading) {
            return <p>Loading…</p>;
        }
        return <>
            <div className="hello-world">
                <div className="hello-world-child">
                    {label}
                </div>
            </div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);