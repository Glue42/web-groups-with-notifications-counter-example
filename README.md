# Glue42 Groups in React

This is a template for creating a React Groups application for [**Glue42 Enterprise**](https://glue42.com/enterprise/).

# Configuration 

The Glue42 web groups are based on web technologies and allow for complete customization of the containing group frame and all elements of the different Glue42 Window types (flat, tab and HTML) that may be a part of it. To switch to the Glue42 web groups, use the "groupType" property in the stickywindows.json configuration file of Glue42 Enterprise located in the %LocalAppData%\Tick42\GlueDesktop\config folder:

```json
{
    "groupType": "Web"
}
```

Your custom Web Group App, as every Glue42 enabled app, must have an app configuration file. By default, Glue42 Enterprise will search for an app registered with the name "glue42-web-group-application" and if one is available, will use it as the Web Group App. If no such app is found, the first available app definition of type "webGroup" will be used. Note that Glue42 Enterprise expects only one app definition for a Web Group App - i.e., one configuration file with "type" property set to "webGroup". If multiple Web Group App definitions are present, the first one will be used. Glue42 Enterprise comes with a Web Group App and a configuration file for it named webGroup.json and located in %LocalAppData%\Tick42\GlueDesktop\config\apps. Modify or replace this file with your own configuration file, or delete it, if your app configurations are stored at another location.

The "type" property must be set to "webGroup":

```json
{
    "name": "web-group-app",
    "title": "Web Group App",
    "type": "webGroup",
    "hidden": true,
    "details": {
        "url": "http://localhost:3000/",
        "autoOpenDevTools": true,
        "preloadScripts": ["https://example.com/my-script.js"],
        "pool": {
            "min": 5
        }
    }
}
```

The "url" property is required and must point to the location of your custom Web Group App.

Use the "autoOpenDevTools" property to automatically open the Chrome Dev Tools (disabled by default) when debugging your Web Group App.

Use the "preloadScripts" property to specify a list of URLs pointing to scripts that will be loaded and executed before loading the Web Group App.

Use the "pool" property to specify the minimum number of cached Web Group App instances (default is 3) used for improving group performance and user experience. The higher the number, the more memory will be consumed; the lower the number, the higher the chance to experience delay during web group operations.

The "hidden" property is set to true in order to hide the Web Group App from the Glue42 Toolbar, because this is a service app used directly by Glue42 Enterprise to handle Glue42 Window groups.

## Raising Notifications

The Notifications API is accessible through the glue.notifications object.

To raise a notification from your app, use the raise() method of the API. The method accepts as an argument a required Glue42NotificationOptions object with settings for the notification you want to raise:

```javascript
const options = {
    title: "New Trade",
    body: "VOD.L: 23 shares sold @ $212.03",
    actions: [
        {
            action: "openClientPortfolio",
            title: "Open Portfolio"
        }
    ]
};

// Raising a notification.
const notification = await glue.notifications.raise(options);
```

## Prerequisites

For a **Glue42 Enterprise** project, you need to have [**Glue42 Enterprise**](https://glue42.com/enterprise/) 3.17 or newer.

## Usage

- Run `npm install` to install all dependencies.
- Run `npm run start` to start the app.
