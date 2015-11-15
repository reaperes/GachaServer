# GachaServer
## APIs

    POST /authenticate
    {
        userId: userId,
        accessToken: accessToken
    }
    
    When error, server returns 400.
    
    POST /restaurants
    {
        userId: userId,
        name: restaurantName,
        review: restaurantReview,
        score: 0~100,
        latitude: float number,
        longitude: float number
    }
    
    GET /restaurants
    {
        userId: userId,
        leftTopX: float number,
        leftTopY: float number,
        rightBottomX: float number,
        rightBottomY: float number
    }