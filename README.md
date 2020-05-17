Webhooks, Event Triggers and Vetting
==========================

## Event Triggers (API)
Each time a specific Arcadier API is called, a `POST` request can be sent to your webhook with a payload containing relevant information about the event. More details [here](https://github.com/Arcadier/Webhooks-Event-Triggers-and-Vetting/tree/master/(Core)%20Event%20Trigger%20Hooks).

## JS Custom Triggers:
For "non-API call" events, custom triggers can be created. Here are some examples with custom code:
* Category Creation - Script triggered on Admin Portal
* Category Deletion - Script triggered on Admin Portal
* Item Creation - Script triggered on Merchant Portal
* Item Edit - Script triggered on Merchant Portal

Possible use for these triggers - Vetting by admin:
* Item Creation - Script triggered on Merchant Portal. Admin needs to approve newly created items
* Item Edit - Script triggered on Merchant Portal. Admin needs to approve recently edited items

### How to install custom triggers
For example, if you want to install [Item Creation]() as a plug-in.
1. Download the repository 
2. Extract all the content of the zip file
3. In the resulting extracted folder, fo to `Item Creation` folder.
4. Compress `admin` and `user` together.
5. The resulting zip file is what you upload to your developer dashboard.
