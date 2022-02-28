<template>
    <v-container>
        <v-row no-gutters>
            <v-vol sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Add New Post</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                        <v-text-field label="Category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                        <v-textarea label="Content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                        <v-file-input :rules="rules" show-size counter multiple label="Select Image"></v-file-input>
                        <v-btn type="submit" class="mt-3" color="primary">Add Post</v-btn>
                    </v-form> 
                </v-card>
            </v-vol>
        </v-row>
    </v-container>
</template>