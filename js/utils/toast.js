import Swal from "sweetalert2";

export function showToast(title, icon = "success") {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon,
    title,
    showConfirmButton: false,
    timer: 3000,
  });
}
// export function showToast_faild(title, icon = "error") {
//   Swal.fire({
//     toast: true,
//     position: "top-end",
//     icon,
//     title,
//     showConfirmButton: false,
//     timer: 3000,
//   });
// }
