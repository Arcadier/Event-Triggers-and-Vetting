Webhooks, Event Triggers and Vetting
==========================

## (Core) Event Trigger Hooks
Connect your webhooks to specific events via the our [`Event Trigger`](https://github.com/Arcadier/Event-Triggers-and-Vetting/tree/master/Event%20Trigger%20Hooks) tool accessible from your marketplace's admin portal.

## JS Custom Triggers:
* Category Creation - Script triggered on Admin Portal
* Category Deletion - Script triggered on Admin Portal
* Item Creation - Script triggered on Merchant Portal
* Item Edit - Script triggered on Merchant Portal

Vetting by admin front-end triggers:
* Item Creation - Script triggered on Merchant Portal. Admin needs to approve newly created items
* Item Edit - Script triggered on Merchant Portal. Admin needs to approve recently edited items

## How to install
For example, if you want to install [Item Creation]() as a plug-in.
1. Download the repository 
2. Extract all the content of the zip file
3. In the resulting extracted folder, fo to `Item Creation` folder.
4. Compress `admin` and `user` together.
5. The resulting zip file is what you upload to your developer dashboard.
