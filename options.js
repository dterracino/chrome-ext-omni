// chrome.permissions.getAll(function (activePermissions) {
//   var optPermissions = chrome.runtime.getManifest().optional_permissions;
//   for (var i in optPermissions) {
//     var permission = optPermissions[i],
//         active = activePermissions.permissions.indexOf(permission) > -1;
//     $('#optional').append(
//       $('<li>').attr('id', permission).append(
//         $('<button>').text(active ? 'remove' : 'add')
//           .click(function () {
//             if (!active) {
//               chrome.permissions.request({
//                 permissions: [permission]
//               }, function (granted) {
//                 $('#' + permission + ' input').attr('checked', granted);
//                 console.log(granted, chrome.runtime.lastError);
//               });
//             } else {
//               chrome.permissions.remove({
//                 permissions: [permission]
//               }, function (removed) {
//                 $('#' + permission + ' input').attr('checked', !removed);
//               });
//             }
//           })
//       ).append(
//         $('<span>').attr('class', 'permission')
//           .text(permission)
//       )
//     );
//   }
// });