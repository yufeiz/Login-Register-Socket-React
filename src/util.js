export function getRedirectPath({type, avatar}) {
  //user.type /boss /genius
  let url = (type==='boss') ? '/boss' : '/genius'
  if(!avatar) {
    url += 'info'
  }
  return url
}
