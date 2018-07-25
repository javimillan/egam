import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Issue} from '../models/issue';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Injectable()
export class DataService {
  // private readonly API_URL = 'https://api.github.com/repos/angular/angular/issues';
  private readonly API_URL = 'http://localhost:3000/api/pacientes';

  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  postPaciente(issue: Issue):void {
    this.dialogData = issue;
    console.log("añadiendo nuevo paciente");
    this.httpClient.post(this.API_URL, issue).subscribe(data => {
      this.dialogData = issue;
      // this.toasterService.showToaster('Successfully added', 3000);
      // alert("añadido correctamente");
      },
      (err: HttpErrorResponse) => {
      // this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      console.log("No se ha añadido paciente");
    });;
  }

  // DEMO ONLY, you can find working methods below
  // addIssue (issue: Issue){
  //   this.dialogData = issue;
  //
  //   return this.httpClient.post(this.API_URL, issue);
  // }

  updateIssue (issue: Issue): void {
    this.dialogData = issue;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }

  // DELETE METHOD
  // deleteItem(id: number): void {
  //   console.log("borrar registro de bbdd");
  //   this.httpClient.delete(this.API_URL + id).subscribe(data => {
  //     console.log(data['']);
  //       // this.toasterService.showToaster('Successfully deleted', 3000);
  //       snackBar.open('Successfully deleted', 'Aceptar');
  //     },
  //     (err: HttpErrorResponse) => {
  //       // this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
  //       snackBar.open('Error occurred. Details: ' + err.name + ' ' + err.message, 'Aceptar');
  //     }
  //   );
  // }




}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/
