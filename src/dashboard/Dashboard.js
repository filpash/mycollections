import React, { Component } from 'react';
import withWidth from 'material-ui/utils/withWidth';
import { AppBarMobile, GET_LIST, GET_MANY } from 'admin-on-rest';

import Welcome from './Welcome';
import PendingReviews from './PendingReviews';
import restClient from '../restClient';

const styles = {
    welcome: { marginBottom: '2em' },
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em' },
};

class Dashboard extends Component {
    state = {};

    componentDidMount() {
        const d = new Date();
        d.setDate(d.getDate() - 30);
        restClient(GET_LIST, 'commands', {
                filter: { date_gte: d.toISOString() },
                sort: { field: 'date', order: 'DESC' },
                pagination: { page: 1, perPage: 50 },
            })
            .then(response => response.data
                .filter(order => order.status !== 'cancelled')
                .reduce((stats, order) => {
                    if (order.status !== 'cancelled') {
                        stats.revenue += order.total;
                        stats.nbNewOrders++;
                    }
                    if (order.status === 'ordered') {
                        stats.pendingOrders.push(order);
                    }
                    return stats;
                }, { revenue: 0, nbNewOrders: 0, pendingOrders: [] })
            )
            .then(({ revenue, nbNewOrders, pendingOrders }) => {
                this.setState({
                    revenue: revenue.toLocaleString(undefined, {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    }),
                    nbNewOrders,
                    pendingOrders,
                });
                return pendingOrders;
            })
            .then(pendingOrders => pendingOrders.map(order => order.customer_id))
            .then(customerIds => restClient(GET_MANY, 'customers', { ids: customerIds }))
            .then(response => response.data)
            .then(customers => customers.reduce((prev, customer) => {
                prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                return prev;
            }, {}))
            .then(customers => this.setState({ pendingOrdersCustomers: customers }));

        restClient(GET_LIST, 'reviews', {
                filter: { status: 'pending' },
                sort: { field: 'date', order: 'DESC' },
                pagination: { page: 1, perPage: 100 },
            })
            .then(response => response.data)
            .then(reviews => {
                const nbPendingReviews = reviews.reduce(nb => ++nb, 0);
                const pendingReviews = reviews.slice(0, Math.min(10, reviews.length));
                this.setState({ pendingReviews, nbPendingReviews });
                return pendingReviews;
            })
            .then(reviews => reviews.map(review => review.customer_id))
            .then(customerIds => restClient(GET_MANY, 'customers', { ids: customerIds }))
            .then(response => response.data)
            .then(customers => customers.reduce((prev, customer) => {
                prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                return prev;
            }, {}))
            .then(customers => this.setState({ pendingReviewsCustomers: customers }));

        restClient(GET_LIST, 'customers', {
                filter: { has_ordered: true, first_seen_gte: d.toISOString() },
                sort: { field: 'first_seen', order: 'DESC' },
                pagination: { page: 1, perPage: 100 },
            })
            .then(response => response.data)
            .then(newCustomers => {
                this.setState({ newCustomers });
                this.setState({ nbNewCustomers: newCustomers.reduce(nb => ++nb, 0) })
            })
    }

    render() {
        const {
            nbPendingReviews,
            pendingReviews,
            pendingReviewsCustomers,
        } = this.state;
        const { width } = this.props;
        return (
            <div>
                {width === 1 && <AppBarMobile title="MyCollection" />}
                <Welcome style={styles.welcome} />
                <div style={styles.flex}>
                    <div style={styles.rightCol}>
                        <div style={styles.flex}>
                            <PendingReviews nb={nbPendingReviews} reviews={pendingReviews} customers={pendingReviewsCustomers} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withWidth()(Dashboard);
