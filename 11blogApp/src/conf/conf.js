const conf = {
  appwriteUrl: String(process.env.REACT_APP_SYSTEM_ENDPOINT),

  appwriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),

  appwriteDatbase: String(process.env.REACT_APP_APPWRITE_DATABASE_ID),

  appwriteCollectionId: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID),

  appwriteBucketId: String(process.env.REACT_APP_APPWRITE_BUCKET_ID)
}

export default conf