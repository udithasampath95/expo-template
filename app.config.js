
const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return process.env.PACKAGE_NAME_DEV;
  }

  if (IS_PREVIEW) {
    return process.env.PACKAGE_NAME_PREVIEW;
  }

  return process.env.PACKAGE_NAME_PRODUCTION;
};

const getAppName = () => {
  if (IS_DEV) {
    return process.env.APP_NAME_DEV;
  }

  if (IS_PREVIEW) {
    return process.env.APP_NAME_PREVIEW;
  }

  return process.env.APP_NAME_PRODUCTION;
};

export default ({ config }) => {
  return {
    ...config,
    "name": getAppName(),
    "slug": "VHMobileEngine",
    "owner": "sampath.udithavh",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./src/assets/images/icon.png",
    "scheme": "vhmobileengine",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": getUniqueIdentifier()
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./src/assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./src/assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {},
      "eas": {
        "projectId": "bb770617-dee2-4b0b-a989-2891049c7730"
      }
    },
    "runtimeVersion": {
      "policy": "appVersion"
    },
    "updates": {
      "url": "https://u.expo.dev/bb770617-dee2-4b0b-a989-2891049c7730"
    }
  }
}
