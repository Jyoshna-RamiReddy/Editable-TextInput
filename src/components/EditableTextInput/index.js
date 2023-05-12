import {Component} from 'react'
import {
  MainContainer,
  Container,
  Heading,
  Input,
  Button,
  InlineBlock,
  InlineText,
} from './styled-components'

export default class EditableTextInput extends Component {
  state = {text: '', isEditable: true}

  getText = e => {
    this.setState({text: e.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({isEditable: !prevState.isEditable}))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InlineBlock>
            {isEditable ? (
              <Input value={text} onChange={this.getText} type="text" />
            ) : (
              <InlineText>{text}</InlineText>
            )}
            {isEditable ? (
              <Button onClick={this.changeStatus}>Save</Button>
            ) : (
              <Button onClick={this.changeStatus}>Edit</Button>
            )}
          </InlineBlock>
        </Container>
      </MainContainer>
    )
  }
}
