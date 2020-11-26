import React from 'react';
import { ContactContainer, ContactForm, ContactFormInput, ContactFormLabel, ContactFormWrap, ContactIcon, FormButton, FormContent, ContactFormH1 } from './contactElements';

const ContactMe = () => {
    return (
<>
        <ContactContainer>
                <ContactFormWrap>
                    <ContactIcon to="/">gm</ContactIcon>
                        <FormContent>
                            <ContactForm action="#">
                                <ContactFormH1>
                                    Contact Me
                                </ContactFormH1>
                                    <ContactFormLabel htmlFor= 'for'>Email</ContactFormLabel>
                                    <ContactFormInput type='email' required />
                                    <ContactFormLabel htmlFor='Subject'>Subject</ContactFormLabel>
                                    <ContactFormInput type='subject' required />
                                    <ContactFormLabel htmlFor='message'>Type Message
                                    Here</ContactFormLabel>
                                    <ContactFormInput type='text' required />
                                <FormButton type='submit'>Send</FormButton>
                            </ContactForm>
                        </FormContent>
                </ContactFormWrap>
        </ContactContainer>
</>
);
};

export default ContactMe;