## Endpoints:
 api.tacticaltable.com/teams

::GET:: -> Returns all teams.
- - - -
No authorization is required.

#### Responses:

*200 -> OK*
- Returns an array with all teams and its respective information.


::POST:: -> Add a new team.
- - - -
Must receive an object with the attributes to store on the Team resource.

Authorization is required.
A token must be passed as an "Authorization" HTTP header.

#### Responses:

*303 -> See Other*
- Successfully created. Redirect the user to the new added team.

*400 -> Bad Request*
- You didn't give all the necessary attributes for the object.

*401 -> Unauthorized*
- You are not authorized to do that. You probably forgot to add the "Authorization" header containing your token. Returns an error object.


api.tacticaltable.com/teams/:id

::GET:: -> Returns an individual team.
- - - -
No authorization is required.

#### Responses:

*200 -> OK*
- Request ok. Returns the team which has the passed ID.

*404 -> Not found*
- Object wasn't found. Returns an error object.


::PUT:: -> Update an existent team.
- - - -
Must receive an object with at least one attribute to be updated.

Authorization is required.
A token must be passed as an "Authorization" HTTP header.

#### Responses:

*303 -> See Other*
- Successfully updated. Redirects the user to the updated team.

*400 -> Bad Request*
- You didn't give any attribute from the necessary attributes for the object to be updated.

*401 -> Unauthorized*
- You are not authorized to do that. You probably forgot to add the "Authorization" header containing your token. Returns an error object.

*404 -> Not found*
- Object wasn't found. Returns an error object.


::DELETE:: -> Delete an existent team.
- - - -
Authorization is required.
A token must be passed as an "Authorization" HTTP header.

#### Responses:

*204 -> No content*
- Successfully deleted. Returns an object containing the deletion information.

*401 -> Unauthorized*
- You are not authorized to do that. You probably forgot to add the "Authorization" header containing your token.

*404 -> Not found*
- Object wasn't found. Returns an error object.

#tacticaltable #endpoints #teams
