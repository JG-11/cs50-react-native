import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row'

//import store from './redux/store'
import { connect } from 'react-redux'

const renderItem = obj => <Row {...obj.item}/>
//<Row name={obj.item.name} phone={obj.item.phone}/>

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactsList = props => {
    //const contacts = store.getState().contacts
    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
          ...obj,
          [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})
    
    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        data: contactsByLetter[letter],
        title: letter,
    }))

    return(
        <SectionList 
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.array
}

const mapStateToProps = state => ({
    contacts: state.contacts
})

export default connect(mapStateToProps)(ContactsList)