import React from 'react';

import { bind } from 'lodash/function';
import { mapValues } from 'lodash/object';

import { Row, Col, Button } from 'react-bootstrap';

import Text from 'components/ui/forms/Text';
import TextArea from 'components/ui/forms/TextArea';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.form = {};
    this.onSubmit = bind(this.onSubmit, this);
  }

  onSubmit(e) {
    e.preventDefault();

    const values = mapValues(this.form, 'value');

    alert(JSON.stringify(values));
  }

  generateRef(fieldName) {
    return (input) => { this.form[fieldName] = input; };
  }

  render() {
    return (
      <Row>
        <div>
          <Col sm={12}>
            <p>Обратная связь</p>
          </Col>

          <Col sm={12}>
            <form onSubmit={this.onSubmit}>
              <Text
                label='Full Name'
                name='fullName'
                fieldRef={this.generateRef('fullName')}
              />
              <Text
                label='Email'
                name='email'
                fieldRef={this.generateRef('email')}
              />
              <TextArea
                label='Message'
                name='message'
                fieldRef={this.generateRef('message')}
              />
              <Button type='submit'>
                Отправить
              </Button>
            </form>
          </Col>
        </div>
      </Row>
    );
  }
}

export default Contacts;
