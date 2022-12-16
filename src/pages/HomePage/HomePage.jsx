import css from './HomePage.module.css';

import Media from 'react-media';
import { nanoid } from 'nanoid';

import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Transactions from 'components/Transactions/Transactions';
import TransactionsCards from 'components/TransactionsCards/TransactionsCards';
import AddButton from 'components/AddButton/AddButton';

import * as monoApi from '../../shared/api/mono';

const transactions = [
  {
    id: nanoid(),
    data: '01-12-1990',
    isProfit: false,
    category: 'car',
    comment: 'It is comment',
    total: 200.0,
    balance: 700,
  },
  {
    id: nanoid(),
    data: '01-12-2020',
    isProfit: true,
    category: 'car',
    comment: 'It is comment',
    total: 300.0,
    balance: 800,
  },
  {
    id: nanoid(),
    data: '01-12-2020',
    isProfit: true,
    category: 'car',
    comment: 'It is comment',
    total: 300.0,
    balance: 800,
  },
  {
    id: nanoid(),
    data: '01-12-2123',
    isProfit: true,
    category: 'car',
    comment: 'It is comment',
    total: 300.0,
    balance: 800,
  },
  {
    id: nanoid(),
    data: '01-12-2020',
    isProfit: false,
    category: 'car',
    comment: 'It is comment',
    total: 300.0,
    balance: 800,
  },
];

const HomePage = () => {
  return (
    <div className={css.home}>
      <div className="container">
        <div className={css.pageWrap}>
          <Media query="(min-width: 576px)" render={() => <AddButton />} />
          <div className={css.content}>
            <div className={css.contentInner}>
              <Navigation />
              <Balance />
            </div>

            <Media
              query="(min-width: 576px)"
              render={() => (
                <div className={css.currencyInner}>
                  <Currency />
                </div>
              )}
            />
          </div>
          <div className={css.board}>
            <Media
              query="(max-width: 575px)"
              render={() => <TransactionsCards transactions={transactions} />}
            />
            <Media
              query="(min-width: 576px)"
              render={() => <Transactions transactions={transactions} />}
            />
          </div>
        </div>
      </div>
      <Media query="(max-width: 575px)" render={() => <AddButton />} />
    </div>
  );
};

export default HomePage;
